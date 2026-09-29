# 🩺 ClinicFlow Pro

## Système intelligent de gestion d'une clinique d'urologie

**Clinique :** عيادة المسالك البولية\
**Médecin :** د. لعيايدة اليزيد

ClinicFlow Pro est une application web responsive destinée à organiser
l'accueil, le tri, les rendez-vous, la file d'attente, les dossiers
patients, les analyses, les prescriptions et le suivi des consultations.

------------------------------------------------------------------------

# 🇫🇷 Français

## 1. Vision et problème

La clinique peut recevoir environ **50 patients par jour** : patients
avec rendez-vous, patients en suivi, nouveaux patients et patients
nécessitant une attention prioritaire.

Le système doit résoudre les problèmes d'encombrement, de conflits sur
l'ordre de passage, de temps d'attente, de consultations longues, de
transmission des analyses et de gestion manuelle des dossiers.

Le flux principal est :

**Accueil → Tri → File d'attente → Médecin → Dossier patient →
Prescription / arrêt maladie → Historique**

Le logiciel organise le travail administratif mais **ne remplace jamais
le jugement médical**.

## 2. Types de visite

À l'accueil, trois choix principaux :

1.  **📅 Rendez-vous** --- patient ayant un rendez-vous.
2.  **🔄 Suivi** --- patient déjà connu, contrôle, lecture d'analyses,
    suivi de traitement ou présentation de nouveaux examens.
3.  **🆕 Nouveau patient** --- première consultation.

## 3. Enregistrement du patient

Le formulaire doit contenir :

-   Nom et prénom \*
-   Date de naissance
-   Lieu de naissance
-   Sexe : Homme / Femme
-   Numéro de téléphone
-   Type de visite
-   État / niveau de tri
-   Note courte
-   Date et heure d'enregistrement

Le système ajoute automatiquement la mention **« Enregistré le : jour /
mois / année »**.

Un **numéro d'attente** est généré automatiquement.

Exemple : **N°024**.

Le numéro est public ; les données personnelles restent visibles
uniquement dans les interfaces autorisées.

## 4. Tri et gestion de la file

Le personnel peut organiser la file selon des niveaux configurables :
normal, prioritaire, urgent, etc.

Le système doit conserver l'heure d'arrivée, le type de visite, le
statut et la priorité.

Une journée pouvant atteindre environ **50 patients** doit être gérable,
mais la capacité quotidienne doit rester configurable et ne doit jamais
être codée en dur.

Une configuration initiale peut prévoir un nombre limité de rendez-vous
et de nouveaux patients, mais ces valeurs doivent être modifiables selon
la capacité réelle du médecin.

## 5. Temps de consultation

Le système enregistre :

-   heure de début ;
-   heure de fin ;
-   durée réelle ;
-   durée estimée ;
-   moyenne des consultations.

Exemple : **15 minutes**.

La durée est un outil d'organisation et ne doit jamais empêcher le
médecin de prendre le temps médical nécessaire.

### 🔴 Cas complexe

Le médecin peut sélectionner **« Cas complexe --- prolonger la
consultation »**.

L'écran d'attente affiche alors automatiquement :

> **Information : la consultation actuelle nécessite un temps
> supplémentaire en raison de la complexité du cas. Nous vous remercions
> de votre patience et de votre compréhension.**

Le message disparaît à la fin de la consultation ou lorsque le médecin
désactive le mode.

## 6. Écran public d'attente

L'écran doit comporter :

### 🔵 Numéro du patient

Le numéro actuel doit s'allumer ou être visuellement mis en évidence
lorsqu'un patient est appelé.

### 🟢 Temps

Afficher la durée estimée ou l'information d'attente, par exemple **15
min**.

### 🔴 Prolongation

Afficher clairement la consultation prolongée lorsqu'un cas complexe est
en cours.

L'écran public ne doit jamais afficher le nom, téléphone, diagnostic,
analyses ou prescription du patient.

## 7. Navigation

Conserver toutes les fonctions importantes de la première version :

-   🏠 Tableau de bord
-   👨‍⚕️ Médecin
-   ➕ Accueil
-   🔀 Tri / Filtrage
-   👥 Dossiers patients
-   📅 Rendez-vous
-   📺 Écran d'attente

Sur smartphone, la barre supérieure doit être **défilable
horizontalement** afin qu'aucune section ne soit supprimée.

## 8. Analyses et examens

Dans **Accueil → Suivi**, le personnel peut utiliser la caméra du
téléphone pour :

-   photographier des analyses ;
-   photographier des examens ;
-   photographier des comptes rendus ;
-   photographier une ancienne ordonnance ;
-   ajouter plusieurs pages ;
-   supprimer/reprendre une photo avant validation.

Les documents sont liés au bon patient et envoyés au médecin.

Le médecin reçoit une notification, par exemple :

> 🔔 Nouveau dossier --- Patient N°024 --- 3 documents disponibles.

Le médecin peut consulter les documents puis intégrer le dossier dans
**Dossiers patients**.

## 9. Dossier patient

Chaque dossier contient :

### Données personnelles

Nom, prénom, date de naissance, lieu de naissance, sexe, téléphone,
numéro patient et date d'inscription.

### Historique

Consultations, rendez-vous, suivis, notes, analyses, examens, photos,
prescriptions et arrêts maladie.

L'historique doit être chronologique.

## 10. Prescription

Le médecin dispose d'une fonction **« Rédiger une prescription »**.

Champs possibles :

-   médicament ;
-   dosage ;
-   forme ;
-   fréquence ;
-   durée ;
-   instructions ;
-   remarques.

Après validation :

**Médecin → Prescription → Poste du personnel → Impression**

La prescription est enregistrée dans le dossier du patient et reste
disponible dans son historique.

Le personnel peut recevoir, prévisualiser, imprimer et marquer la
prescription comme imprimée, mais ne doit pas modifier le contenu
médical sans autorisation.

La signature électronique ou reproduite doit respecter les exigences
légales applicables.

## 11. Arrêt maladie

Sous la prescription, ajouter **« Établir un arrêt maladie »**.

Le médecin renseigne notamment :

-   date de début ;
-   date de fin ;
-   durée ;
-   informations nécessaires.

Le système génère un document imprimable et conserve une copie dans le
dossier.

## 12. Horaires du médecin

  Jour       Activité                   Horaire
  ---------- -------------------------- --------------
  Samedi     Consultations au cabinet   08:00--17:00
  Dimanche   Consultations au cabinet   08:00--17:00
  Lundi      Consultations au cabinet   08:00--17:00
  Mardi      Consultations au cabinet   08:00--17:00
  Mercredi   Opérations à l'hôpital     ---
  Jeudi      Opérations à l'hôpital     ---
  Vendredi   Jour de repos              ---

Le système ne doit pas proposer automatiquement de rendez-vous au
cabinet mercredi, jeudi ou vendredi.

Le planning doit rester modifiable par un utilisateur autorisé pour
gérer absences, congés ou changements exceptionnels.

## 13. Permissions

### Médecin

Accès aux dossiers, analyses, prescriptions, arrêts maladie,
consultations, cas complexes, demandes de modification et historique.

### Personnel / infirmier / accueil

Enregistrement, rendez-vous, tri, photographie des documents,
transmission au médecin, file d'attente, impression et corrections
administratives autorisées.

### Administrateur

Utilisateurs, rôles, horaires, capacité, priorités, paramètres, écrans
et journaux.

## 14. Modification des données

Le personnel peut corriger les informations administratives autorisées
pendant **24 heures** après l'enregistrement.

Après 24 heures :

> **« La période de modification est expirée. L'autorisation du médecin
> est requise. »**

Le médecin peut accepter, refuser ou effectuer directement la
modification.

Chaque modification importante est inscrite dans un **Audit Log** avec :

-   utilisateur ;
-   rôle ;
-   date et heure ;
-   champ ;
-   ancienne valeur ;
-   nouvelle valeur ;
-   motif si nécessaire.

Exemple :

``` text
29/09/2026 — 14:30
Utilisateur : Personnel accueil
Champ : Date de naissance
Ancienne valeur : 12/03/1990
Nouvelle valeur : 12/03/1991
Motif : Correction d’une erreur de saisie
```

## 15. Sécurité et confidentialité

Le système traite des données médicales sensibles. Prévoir :

-   authentification ;
-   rôles et permissions ;
-   sessions sécurisées ;
-   mots de passe protégés ;
-   communications chiffrées ;
-   protection des documents ;
-   sauvegardes ;
-   journalisation ;
-   contrôle des accès.

L'écran public ne montre que les informations nécessaires à l'attente.

## 16. Design

Interface :

-   professionnelle ;
-   moderne ;
-   médicale ;
-   claire ;
-   rapide ;
-   responsive ;
-   compatible arabe RTL.

Nom affiché : **عيادة المسالك البولية**\
Médecin : **د. لعيايدة اليزيد**\
Nom technique : **ClinicFlow Pro**

Le système doit fonctionner sur smartphone, ordinateur et écran
d'attente.

## 17. Tableau de bord

Afficher :

-   patients du jour ;
-   patients en attente ;
-   patient actuel ;
-   consultation actuelle ;
-   durée ;
-   moyenne ;
-   rendez-vous ;
-   nouveaux patients ;
-   suivis ;
-   priorités ;
-   documents reçus ;
-   alertes.

## 18. Architecture fonctionnelle

``` text
                    CLINICFLOW PRO
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
     ACCUEIL             MÉDECIN            ADMIN
        │                  │                  │
        ▼                  ▼                  ▼
 Enregistrement      Dossier patient       Paramètres
        │                  │
        ▼                  ▼
 Numéro d’attente     Analyses / examens
        │                  │
        ▼                  ▼
 TRI ───────────────► CONSULTATION
        │                  │
        ▼                  ├── Prescription
 Écran d’attente           ├── Arrêt maladie
                           └── Historique
```

## 19. Flux spécial « Suivi »

``` text
Patient en suivi
      ↓
Accueil
      ↓
Photographie des analyses/examens
      ↓
Association au patient
      ↓
Notification médecin
      ↓
Médecin consulte les documents
      ↓
Dossier patient
      ↓
Consultation si nécessaire
      ↓
Prescription / suivi
```

## 20. Règles de conception

1.  Ne supprimer aucune fonction importante de la première version.
2.  Garder toutes les sections accessibles sur mobile.
3.  Ne jamais afficher de données médicales sur l'écran public.
4.  Les durées sont des estimations, jamais une contrainte médicale.
5.  Les modifications importantes doivent être traçables.
6.  Horaires, capacité et durées doivent être configurables.
7.  Le médecin garde le contrôle des décisions médicales.
8.  Le système doit pouvoir évoluer vers plusieurs médecins et plusieurs
    salles.

## 21. Évolutions futures

Prévoir une architecture extensible pour :

-   plusieurs médecins ;
-   plusieurs infirmiers ;
-   plusieurs salles ;
-   statistiques ;
-   rappels SMS ;
-   notifications mobiles ;
-   prise de rendez-vous à distance ;
-   portail patient ;
-   sauvegarde cloud sécurisée ;
-   recherche avancée ;
-   exports sécurisés ;
-   intégrations avec d'autres systèmes lorsque légalement et
    techniquement possible.

## 22. Checklist de validation

-   [ ] Enregistrement patient
-   [ ] Rendez-vous / Suivi / Nouveau patient
-   [ ] Numéro automatique
-   [ ] Tri et priorité
-   [ ] File d'attente
-   [ ] Écran public
-   [ ] Mise en évidence du numéro appelé
-   [ ] Temps estimé
-   [ ] Mode cas complexe
-   [ ] Message automatique d'attente
-   [ ] Caméra pour analyses
-   [ ] Plusieurs documents
-   [ ] Notification médecin
-   [ ] Dossier patient
-   [ ] Historique
-   [ ] Prescription
-   [ ] Impression
-   [ ] File d'impression du personnel
-   [ ] Arrêt maladie
-   [ ] Planning médecin
-   [ ] Capacité quotidienne configurable
-   [ ] Permissions
-   [ ] Correction 24 h
-   [ ] Validation médecin après 24 h
-   [ ] Audit Log
-   [ ] Responsive mobile
-   [ ] Interface ordinateur
-   [ ] Arabe RTL
-   [ ] Confidentialité écran public
-   [ ] Authentification et sécurité

## 23. Statut

**Prototype / Active Development**

Le système doit être testé et validé avant une utilisation réelle. Les
exigences médicales, juridiques, de confidentialité et de signature des
documents doivent être vérifiées selon la réglementation applicable.

------------------------------------------------------------------------

# 🇬🇧 English

## Project Overview

ClinicFlow Pro is a responsive clinic-management system for a urology
practice.

It organizes patient registration, appointments, triage, queues,
waiting-room displays, consultation timing, medical records, medical
documents, prescriptions, sick-leave documents and staff permissions.

The system is designed around a real-world workflow and **does not
replace medical judgment**.

### Core workflow

**Reception → Triage → Queue → Doctor → Patient Record → Prescription /
Sick Leave → History**

### Visit types

-   **Appointment**
-   **Follow-up**
-   **New Patient**

### Patient registration

Required information includes:

-   full name;
-   date of birth;
-   place of birth;
-   gender;
-   phone;
-   visit type;
-   triage status;
-   short note;
-   automatic registration date and time.

Every patient receives an automatic queue number.

The public display shows the number only; authorized staff and the
doctor see the patient identity and details.

### Queue and triage

The system supports configurable priorities such as normal, priority and
urgent.

It should handle days with approximately **50 patients**, while keeping
daily capacity configurable rather than hard-coded.

### Consultation timing

Track start time, end time, actual duration, estimated duration and
average duration.

Example: **15 minutes**.

The timer is an organizational estimate and must never force the doctor
to shorten necessary medical care.

### Complex case

The doctor can activate **"Complex Case --- Extend Consultation"**.

The public display then shows a clear message that the current
consultation requires additional time and asks patients to wait
patiently.

### Waiting-room display

Three visual zones:

-   **Blue:** current patient number, highlighted when called.
-   **Green:** estimated consultation / waiting time.
-   **Red:** extended consultation / complex case notification.

No patient names, diagnoses, phone numbers, tests or prescriptions may
appear publicly.

### Medical documents

For follow-up patients, staff can use a smartphone camera to photograph
laboratory results, reports, scans, previous prescriptions and other
authorized medical documents.

Multiple pages must be supported.

Documents are linked to the patient and sent to the doctor with a
notification.

### Doctor dashboard

The doctor can see:

-   patients registered today;
-   waiting patients;
-   current patient;
-   appointments;
-   follow-ups;
-   new patients;
-   priority cases;
-   received documents;
-   consultation duration;
-   queue status.

### Patient record

Each patient record stores personal information, registration data,
consultations, appointments, follow-ups, notes, tests, examinations,
uploaded documents, prescriptions and sick-leave documents.

History should be chronological.

### Prescription

The doctor can write a prescription containing medication, dosage,
frequency, duration, instructions and notes.

Workflow:

**Doctor → Prescription → Staff Printer Queue → Print**

The prescription is stored in the patient record.

The staff may print it but must not change medical content without
authorization.

Any electronic or reproduced signature must comply with applicable legal
requirements.

### Sick leave

The doctor can create a sick-leave document with start date, end date
and duration.

The document is printable and stored in the patient record.

### Doctor schedule

  Day         Activity               Hours
  ----------- ---------------------- --------------
  Saturday    Clinic consultations   08:00--17:00
  Sunday      Clinic consultations   08:00--17:00
  Monday      Clinic consultations   08:00--17:00
  Tuesday     Clinic consultations   08:00--17:00
  Wednesday   Hospital operations    ---
  Thursday    Hospital operations    ---
  Friday      Day off                ---

Appointments should not automatically be offered on Wednesday, Thursday
or Friday.

Authorized users must be able to modify the schedule for exceptional
circumstances.

### Permissions

**Doctor:** medical records, documents, prescriptions, sick leave,
consultation management, complex-case mode and approval of late
modifications.

**Staff:** registration, appointments, triage, documents, queue,
printing and authorized administrative corrections.

**Administrator:** users, roles, schedules, capacity, priorities,
settings and audit logs.

### Modification policy

Staff may correct authorized administrative information for **24 hours**
after registration.

After 24 hours, doctor authorization is required.

Every important modification must be recorded in an audit log containing
user, role, date/time, field, old value, new value and reason where
appropriate.

### Security

Because the system handles sensitive medical data, it must provide
authentication, role-based access, secure sessions, protected passwords,
encrypted communications, protected documents, backups, access logging
and privacy-aware public displays.

### Responsive design

The system must work on:

-   Android;
-   iPhone;
-   tablets;
-   desktop computers;
-   waiting-room displays.

The primary UI is Arabic RTL, with architecture ready for French and
English localization.

### Navigation

Do not remove important sections from the first version.

Keep:

-   Dashboard
-   Doctor
-   Reception
-   Triage / Filtering
-   Patient Records
-   Appointments
-   Waiting Screen

On mobile, the navigation bar should be horizontally scrollable instead
of hiding functionality.

### Future expansion

The architecture should support multiple doctors, nurses, rooms,
advanced statistics, SMS reminders, mobile notifications, remote
appointment requests, patient portals, secure backups, advanced search,
secure exports and legally appropriate integrations.

### Acceptance criteria

-   [ ] Patient registration
-   [ ] Appointment / Follow-up / New Patient
-   [ ] Automatic queue number
-   [ ] Triage and priority
-   [ ] Waiting queue
-   [ ] Public waiting display
-   [ ] Current-number highlighting
-   [ ] Estimated consultation time
-   [ ] Complex-case mode
-   [ ] Automatic waiting message
-   [ ] Smartphone document capture
-   [ ] Multiple documents
-   [ ] Doctor notification
-   [ ] Patient records
-   [ ] Medical history
-   [ ] Prescription
-   [ ] Printing
-   [ ] Staff print workflow
-   [ ] Sick leave
-   [ ] Doctor schedule
-   [ ] Configurable daily capacity
-   [ ] Permissions
-   [ ] 24-hour correction period
-   [ ] Doctor approval after 24 hours
-   [ ] Audit log
-   [ ] Mobile responsive UI
-   [ ] Desktop UI
-   [ ] Arabic RTL
-   [ ] Public-screen privacy
-   [ ] Authentication and security

## Project Status

**Prototype / Active Development**

The application must be thoroughly tested and legally reviewed before
real-world clinical deployment.
