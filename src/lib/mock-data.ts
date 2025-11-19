export interface Student {
  id: string;
  name: string;
  email: string;
  classId: string;
  grade: string;
  avatar: string;
  parentId: string;
  attendance: number;
  gpa: number;
  subjects: string[];
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  subject: string;
  classIds: string[];
  avatar: string;
  experience: number;
}

export interface Parent {
  id: string;
  name: string;
  email: string;
  studentIds: string[];
  avatar: string;
  phone: string;
}

export interface Class {
  id: string;
  name: string;
  grade: string;
  teacherId: string;
  studentCount: number;
  schedule: string;
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  classId: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: number;
}

export interface Attendance {
  id: string;
  studentId: string;
  date: string;
  status: 'present' | 'absent' | 'late';
  classId: string;
}

// Mock Students
export const mockStudents: Student[] = [
  {
    id: '3',
    name: 'Jean Martin',
    email: 'student@school.edu',
    classId: 'class-1',
    grade: '10th Grade',
    avatar: '/avatar.png',
    parentId: '4',
    attendance: 92,
    gpa: 3.8,
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Literature']
  },
  {
    id: 'student-2',
    name: 'Marie Dupont',
    email: 'marie.dupont@school.edu',
    classId: 'class-1',
    grade: '10th Grade',
    avatar: '/avatar.png',
    parentId: 'parent-2',
    attendance: 95,
    gpa: 3.9,
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Literature']
  },
  {
    id: 'student-3',
    name: 'Pierre Moreau',
    email: 'pierre.moreau@school.edu',
    classId: 'class-2',
    grade: '11th Grade',
    avatar: '/avatar.png',
    parentId: 'parent-3',
    attendance: 88,
    gpa: 3.6,
    subjects: ['Biology', 'Chemistry', 'Mathematics', 'English']
  }
];

// Mock Teachers
export const mockTeachers: Teacher[] = [
  {
    id: '2',
    name: 'Marie Dubois',
    email: 'teacher@school.edu',
    subject: 'Mathematics',
    classIds: ['class-1', 'class-2'],
    avatar: '/avatar.png',
    experience: 8
  },
  {
    id: 'teacher-2',
    name: 'Paul Bernard',
    email: 'paul.bernard@school.edu',
    subject: 'Physics',
    classIds: ['class-1', 'class-3'],
    avatar: '/avatar.png',
    experience: 12
  },
  {
    id: 'teacher-3',
    name: 'Sophie Laurent',
    email: 'sophie.laurent@school.edu',
    subject: 'Literature',
    classIds: ['class-2', 'class-3'],
    avatar: '/avatar.png',
    experience: 6
  }
];

// Mock Parents
export const mockParents: Parent[] = [
  {
    id: '4',
    name: 'Pierre Martin',
    email: 'parent@school.edu',
    studentIds: ['3'],
    avatar: '/avatar.png',
    phone: '+33 1 23 45 67 89'
  },
  {
    id: 'parent-2',
    name: 'Claire Dupont',
    email: 'claire.dupont@school.edu',
    studentIds: ['student-2'],
    avatar: '/avatar.png',
    phone: '+33 1 98 76 54 32'
  },
  {
    id: 'parent-3',
    name: 'Michel Moreau',
    email: 'michel.moreau@school.edu',
    studentIds: ['student-3'],
    avatar: '/avatar.png',
    phone: '+33 1 11 22 33 44'
  }
];

// Mock Classes
export const mockClasses: Class[] = [
  {
    id: 'class-1',
    name: '10th Grade A',
    grade: '10th',
    teacherId: '2',
    studentCount: 25,
    schedule: 'Mon-Fri 8:00-15:00'
  },
  {
    id: 'class-2',
    name: '11th Grade B',
    grade: '11th',
    teacherId: 'teacher-3',
    studentCount: 23,
    schedule: 'Mon-Fri 8:30-15:30'
  },
  {
    id: 'class-3',
    name: '12th Grade C',
    grade: '12th',
    teacherId: 'teacher-2',
    studentCount: 20,
    schedule: 'Mon-Fri 9:00-16:00'
  }
];

// Mock Assignments
export const mockAssignments: Assignment[] = [
  {
    id: 'assign-1',
    title: 'Algebra Problem Set',
    subject: 'Mathematics',
    classId: 'class-1',
    dueDate: '2025-01-20',
    status: 'pending'
  },
  {
    id: 'assign-2',
    title: 'Physics Lab Report',
    subject: 'Physics',
    classId: 'class-1',
    dueDate: '2025-01-25',
    status: 'submitted',
    grade: 85
  },
  {
    id: 'assign-3',
    title: 'Literature Essay',
    subject: 'Literature',
    classId: 'class-2',
    dueDate: '2025-01-18',
    status: 'graded',
    grade: 92
  }
];

// Mock Attendance
export const mockAttendance: Attendance[] = [
  {
    id: 'att-1',
    studentId: '3',
    date: '2025-01-15',
    status: 'present',
    classId: 'class-1'
  },
  {
    id: 'att-2',
    studentId: 'student-2',
    date: '2025-01-15',
    status: 'present',
    classId: 'class-1'
  },
  {
    id: 'att-3',
    studentId: 'student-3',
    date: '2025-01-15',
    status: 'late',
    classId: 'class-2'
  }
];

// Helper functions to get data by role
export const getStudentData = (studentId: string) => {
  const student = mockStudents.find(s => s.id === studentId);
  const assignments = mockAssignments.filter(a => a.classId === student?.classId);
  const attendance = mockAttendance.filter(a => a.studentId === studentId);
  
  return { student, assignments, attendance };
};

export const getTeacherData = (teacherId: string) => {
  const teacher = mockTeachers.find(t => t.id === teacherId);
  const classes = mockClasses.filter(c => teacher?.classIds.includes(c.id));
  const students = mockStudents.filter(s => teacher?.classIds.includes(s.classId));
  
  return { teacher, classes, students };
};

export const getParentData = (parentId: string) => {
  const parent = mockParents.find(p => p.id === parentId);
  const children = mockStudents.filter(s => parent?.studentIds.includes(s.id));
  const assignments = mockAssignments.filter(a => 
    children.some(child => child.classId === a.classId)
  );
  
  return { parent, children, assignments };
};

export const getAdminData = () => {
  return {
    students: mockStudents,
    teachers: mockTeachers,
    parents: mockParents,
    classes: mockClasses,
    assignments: mockAssignments,
    attendance: mockAttendance
  };
};