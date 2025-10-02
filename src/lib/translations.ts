export const translations = {
  en: {
    // Navigation
    dashboard: "Dashboard",
    admin: "Admin",
    teacher: "Teacher",
    student: "Student",
    parent: "Parent",
    
    // Lists
    students: "Students",
    teachers: "Teachers",
    parents: "Parents",
    subjects: "Subjects",
    classes: "Classes",
    lessons: "Lessons",
    exams: "Exams",
    assignments: "Assignments",
    results: "Results",
    events: "Events",
    announcements: "Announcements",
    
    // Common
    total: "Total",
    present: "Present",
    absent: "Absent",
    attendanceRate: "Attendance Rate",
    today: "Today",
    viewAll: "View All",
    add: "Add",
    edit: "Edit",
    delete: "Delete",
    cancel: "Cancel",
    save: "Save",
    
    // Admin Dashboard
    teacherAttendance: "Teacher Attendance",
    studentAttendance: "Student Attendance",
    articlesBlogs: "Articles & Blogs",
    addArticle: "Add Article",
    addEvent: "Add Event",
    
    // Event Management
    eventManagement: "Event & Announcement Management",
    pendingSubmissions: "Pending Submissions",
    reviewApprove: "Review and approve submissions from staff and students",
    approve: "Approve",
    reject: "Reject",
    assign: "Assign",
    
    // Forms
    eventTitle: "Event Title",
    author: "Author",
    content: "Content",
    status: "Status",
    draft: "Draft",
    published: "Published",
    
    // Assignment
    assignTo: "Assign to",
    group: "Group",
    class: "Class",
    individual: "Individual",
    
    // Attendance
    teacher: "Teacher",
    updated: "Updated Attendance",
    pending: "Pending",
    notUpdated: "Not Updated"
  },
  fr: {
    // Navigation
    dashboard: "Tableau de Bord",
    admin: "Administrateur",
    teacher: "Professeur",
    student: "Étudiant",
    parent: "Parent",
    
    // Lists
    students: "Étudiants",
    teachers: "Professeurs",
    parents: "Parents",
    subjects: "Matières",
    classes: "Classes",
    lessons: "Cours",
    exams: "Examens",
    assignments: "Devoirs",
    results: "Résultats",
    events: "Événements",
    announcements: "Annonces",
    
    // Common
    total: "Total",
    present: "Présent",
    absent: "Absent",
    attendanceRate: "Taux de Présence",
    today: "Aujourd'hui",
    viewAll: "Voir Tout",
    add: "Ajouter",
    edit: "Modifier",
    delete: "Supprimer",
    cancel: "Annuler",
    save: "Enregistrer",
    
    // Admin Dashboard
    teacherAttendance: "Présence des Professeurs",
    studentAttendance: "Présence des Étudiants",
    articlesBlogs: "Articles et Blogs",
    addArticle: "Ajouter Article",
    addEvent: "Ajouter Événement",
    
    // Event Management
    eventManagement: "Gestion des Événements et Annonces",
    pendingSubmissions: "Soumissions en Attente",
    reviewApprove: "Examiner et approuver les soumissions du personnel et des étudiants",
    approve: "Approuver",
    reject: "Rejeter",
    assign: "Assigner",
    
    // Forms
    eventTitle: "Titre de l'Événement",
    author: "Auteur",
    content: "Contenu",
    status: "Statut",
    draft: "Brouillon",
    published: "Publié",
    
    // Assignment
    assignTo: "Assigner à",
    group: "Groupe",
    class: "Classe",
    individual: "Individuel",
    
    // Attendance
    teacher: "Professeur",
    updated: "Présence Mise à Jour",
    pending: "En Attente",
    notUpdated: "Non Mis à Jour"
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;