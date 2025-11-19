export type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  classId?: string;
  studentIds?: string[]; // For parents
}

// Demo users for testing
export const demoUsers: User[] = [
  {
    id: '1',
    email: 'admin@school.edu',
    name: 'Admin User',
    role: 'admin',
    avatar: '/avatar.png'
  },
  {
    id: '2',
    email: 'teacher@school.edu',
    name: 'Marie Dubois',
    role: 'teacher',
    avatar: '/avatar.png',
    classId: 'class-1'
  },
  {
    id: '3',
    email: 'student@school.edu',
    name: 'Jean Martin',
    role: 'student',
    avatar: '/avatar.png',
    classId: 'class-1'
  },
  {
    id: '4',
    email: 'parent@school.edu',
    name: 'Pierre Martin',
    role: 'parent',
    avatar: '/avatar.png',
    studentIds: ['3']
  }
];

export const authenticate = (email: string, password: string): User | null => {
  // Simple demo authentication - password is always "demo123"
  if (password !== 'demo123') return null;
  
  return demoUsers.find(user => user.email === email) || null;
};

export const getPermissions = (role: UserRole) => {
  const permissions = {
    admin: {
      canViewDashboard: true,
      canManageUsers: true,
      canManageClasses: true,
      canViewAllStudents: true,
      canViewAllTeachers: true,
      canManageEvents: true,
      canManageAnnouncements: true,
      canViewReports: true,
      canManageGallery: true
    },
    teacher: {
      canViewDashboard: true,
      canManageUsers: false,
      canManageClasses: false,
      canViewAllStudents: false,
      canViewAllTeachers: false,
      canManageEvents: false,
      canManageAnnouncements: false,
      canViewReports: true,
      canManageGallery: false,
      canViewOwnClasses: true,
      canManageAttendance: true,
      canViewGrades: true
    },
    student: {
      canViewDashboard: true,
      canManageUsers: false,
      canManageClasses: false,
      canViewAllStudents: false,
      canViewAllTeachers: false,
      canManageEvents: false,
      canManageAnnouncements: false,
      canViewReports: false,
      canManageGallery: false,
      canViewOwnGrades: true,
      canViewOwnAttendance: true,
      canViewAssignments: true
    },
    parent: {
      canViewDashboard: true,
      canManageUsers: false,
      canManageClasses: false,
      canViewAllStudents: false,
      canViewAllTeachers: false,
      canManageEvents: false,
      canManageAnnouncements: false,
      canViewReports: false,
      canManageGallery: false,
      canViewChildGrades: true,
      canViewChildAttendance: true,
      canCommunicateWithTeachers: true
    }
  };

  return permissions[role];
};