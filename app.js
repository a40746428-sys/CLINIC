const KEY="clinicflow_pro_v1";
const state=JSON.parse(localStorage.getItem(KEY)||'null')||{patients:[],appointments:[],current:null,complex:false};
const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
const app=document.getElementById('app');
const toast=(m)=>{const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)};
const esc=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nextNumber=()=>String(state.patients.length+1).padStart(3,'0');

function layout(title,body,actions=''){return `<div class="container"><div class="page-title"><h2>${title}</h2><div>${actions}</div></div>${body}</div>`}
function setActive(view){document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===view));}
function render(view='dashboard'){
  setActive(view);
  if(view==='dashboard') return dashboard();
  if(view==='reception') return reception();
  if(view==='patients') return patients();
  if(view==='triage') return triage();
  if(view==='appointments') return appointments();
  if(view==='waiting') return waiting();
  if(view==='doctor') return doctor();
}
document.getElementById('nav').addEventListener('click',e=>{const b=e.target.closest('button[data-view]');if(b)render(b.dataset.view)});
function dashboard(){
  const waiting=state.patients.filter(p=>p.status==='waiting').length;
  const today=state.patients.length;
  app.innerHTML=layout('لوحة التحكم',`<div class="grid">
    <div class="card"><div class="muted">مرضى اليوم</div><div class="metric">${today}</div></div>
    <div class="card"><div class="muted">في الانتظار</div><div class="metric">${waiting}</div></div>
    <div class="card"><div class="muted">المريض الحالي</div><div class="metric">${state.current?esc(state.current.number):'—'}</div></div>
    <div class="card"><div class="muted">المواعيد</div><div class="metric">${state.appointments.length}</div></div>
  </div>
  <br><div class="card"><h3>سير العمل</h3><p>الاستقبال → الترياج → قائمة الانتظار → الطبيب → ملف المريض → الوصفة / العطلة المرضية → التاريخ.</p><p class="muted">هذه نسخة Prototype للاختبار؛ لا تُستخدم مع بيانات مرضى حقيقية.</p></div>`);
}
function reception(){
  app.innerHTML=layout('➕ تسجيل مريض',`<div class="card"><form id="patientForm">
  <div class="form">
    <label class="field">الاسم واللقب *<input name="name" required></label>
    <label class="field">تاريخ الميلاد<input name="birth" type="date"></label>
    <label class="field">مكان الميلاد<input name="birthplace"></label>
    <label class="field">الجنس<select name="sex"><option>ذكر</option><option>أنثى</option></select></label>
    <label class="field">رقم الهاتف<input name="phone" type="tel"></label>
    <label class="field">نوع الزيارة<select name="type"><option>موعد</option><option>متابعة</option><option>مريض جديد</option></select></label>
    <label class="field">الأولوية<select name="priority"><option>عادي</option><option>أولوية</option><option>عاجل</option></select></label>
    <label class="field full">ملاحظة قصيرة<textarea name="note" rows="3"></textarea></label>
  </div>
  <div class="actions"><button class="btn">تسجيل وإنشاء رقم انتظار</button></div>
  </form></div>`);
  document.getElementById('patientForm').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);const p={id:crypto.randomUUID(),number:nextNumber(),name:f.get('name'),birth:f.get('birth'),birthplace:f.get('birthplace'),sex:f.get('sex'),phone:f.get('phone'),type:f.get('type'),priority:f.get('priority'),note:f.get('note'),registered:new Date().toLocaleString('fr-FR'),status:'waiting',history:[]};state.patients.push(p);save();toast(`تم التسجيل — رقم الانتظار N°${p.number}`);render('patients')};
}
function patients(){
  const rows=state.patients.map(p=>`<tr><td>N°${p.number}</td><td>${esc(p.name)}</td><td>${esc(p.type)}</td><td>${esc(p.priority)}</td><td>${esc(p.status)}</td><td><button class="btn secondary" onclick="startPatient('${p.id}')">استدعاء</button></td></tr>`).join('');
  app.innerHTML=layout('👥 ملفات المرضى',`<div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>الرقم</th><th>الاسم</th><th>الزيارة</th><th>الأولوية</th><th>الحالة</th><th>إجراء</th></tr></thead><tbody>${rows||'<tr><td colspan="6" class="empty">لا يوجد مرضى مسجلون.</td></tr>'}</tbody></table></div></div>`);
}
window.startPatient=(id)=>{const p=state.patients.find(x=>x.id===id);if(!p)return;state.current=p;state.patients.forEach(x=>{if(x.id===id)x.status='consultation'});save();toast(`تم استدعاء N°${p.number}`);render('waiting')};
function triage(){
  const rows=state.patients.filter(p=>p.status==='waiting').map(p=>`<tr><td>N°${p.number}</td><td>${esc(p.name)}</td><td>${esc(p.type)}</td><td><span class="badge ${p.priority==='عاجل'?'urgent':p.priority==='أولوية'?'priority':''}">${esc(p.priority)}</span></td><td><button class="btn secondary" onclick="setPriority('${p.id}')">تغيير الأولوية</button></td></tr>`).join('');
  app.innerHTML=layout('🔀 الترياج / الفرز',`<div class="card"><p class="muted">الأولوية قابلة للتهيئة وفق مواصفات النظام.</p><div class="table-wrap"><table class="table"><thead><tr><th>الرقم</th><th>المريض</th><th>النوع</th><th>الأولوية</th><th>إجراء</th></tr></thead><tbody>${rows||'<tr><td colspan="5" class="empty">قائمة الانتظار فارغة.</td></tr>'}</tbody></table></div></div>`);
}
window.setPriority=(id)=>{const p=state.patients.find(x=>x.id===id);const n=prompt('الأولوية: عادي / أولوية / عاجل',p.priority);if(['عادي','أولوية','عاجل'].includes(n)){p.priority=n;save();render('triage')}};
function appointments(){
  app.innerHTML=layout('📅 المواعيد',`<div class="card"><form id="apptForm"><div class="form"><label class="field">اسم المريض<input name="name" required></label><label class="field">التاريخ<input name="date" type="date" required></label><label class="field">الوقت<input name="time" type="time" required></label><label class="field">النوع<select name="type"><option>موعد</option><option>متابعة</option></select></label></div><div class="actions"><button class="btn">حفظ الموعد</button></div></form></div><br><div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>المريض</th><th>التاريخ</th><th>الوقت</th><th>النوع</th></tr></thead><tbody>${state.appointments.map(a=>`<tr><td>${esc(a.name)}</td><td>${esc(a.date)}</td><td>${esc(a.time)}</td><td>${esc(a.type)}</td></tr>`).join('')||'<tr><td colspan="4" class="empty">لا توجد مواعيد.</td></tr>'}</tbody></table></div></div>`);
  document.getElementById('apptForm').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);state.appointments.push({name:f.get('name'),date:f.get('date'),time:f.get('time'),type:f.get('type')});save();toast('تم حفظ الموعد');render('appointments')};
}
function waiting(){
  const cur=state.current;
  app.innerHTML=layout('📺 شاشة الانتظار',`<div class="waiting">
    <div class="zone blue"><div>🔵 رقم المريض الحالي</div><div class="number">${cur?'N°'+esc(cur.number):'—'}</div></div>
    <div class="zone green"><div>🟢 وقت الانتظار / الاستشارة</div><div class="number">15 <small>د</small></div></div>
    <div class="zone red"><div>🔴 الحالة</div><div class="number" style="font-size:30px">${state.complex?'استشارة مطولة':''}</div></div>
  </div><br><div class="card"><p>${state.complex?'المعلومة: الاستشارة الحالية تحتاج وقتًا إضافيًا بسبب تعقيد الحالة. نشكركم على الصبر والتفهم.':'لا توجد استشارة مطولة مفعلة.'}</p><div class="actions"><button class="btn" onclick="toggleComplex()">تفعيل / إيقاف الحالة المعقدة</button></div></div>`);
}
window.toggleComplex=()=>{state.complex=!state.complex;save();render('waiting')};
function doctor(){
  const p=state.current;
  app.innerHTML=layout('👨‍⚕️ الطبيب',`<div class="grid">
    <div class="card"><h3>المريض الحالي</h3><div class="metric">${p?'N°'+esc(p.number):'—'}</div><p>${p?esc(p.name):'لا يوجد مريض مستدعى'}</p></div>
    <div class="card"><h3>الوصفة</h3><p>في النسخة التجريبية يمكن إعداد واجهة الوصفة قبل ربطها بقاعدة بيانات آمنة.</p><button class="btn" onclick="toast('واجهة الوصفة جاهزة للتطوير')">فتح</button></div>
    <div class="card"><h3>العطلة المرضية</h3><p>واجهة قابلة للإضافة وفق المتطلبات القانونية المعمول بها.</p><button class="btn secondary" onclick="toast('واجهة العطلة المرضية جاهزة للتطوير')">فتح</button></div>
  </div><br><div class="card"><h3>تنبيه</h3><p>هذه النسخة لا تحفظ أو ترسل بيانات طبية إلى خادم؛ التخزين التجريبي محلي في المتصفح.</p></div>`);
}
render();
