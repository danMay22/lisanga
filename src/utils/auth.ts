// Mock authentication for School Management System
const MOCK_USERS = [
  { email: 'admin@school.edu', password: 'demo123', name: 'Admin User', role: 'admin' },
  { email: 'teacher@school.edu', password: 'demo123', name: 'John Teacher', role: 'teacher' },
  { email: 'student@school.edu', password: 'demo123', name: 'Jane Student', role: 'student' },
  { email: 'parent@school.edu', password: 'demo123', name: 'Parent User', role: 'parent' },
];

export const auth = {
  signIn: async (email: string, password: string) => {
    // Mock authentication - check against mock users
    const user = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (user) {
      // Store mock session in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('school_user', JSON.stringify({
          id: Math.random().toString(36).substr(2, 9),
          email: user.email,
          name: user.name,
          role: user.role,
          created_at: new Date().toISOString(),
        }));
      }
      
      return { 
        data: { 
          user: { 
            id: Math.random().toString(36).substr(2, 9),
            email: user.email,
            name: user.name,
            role: user.role
          } 
        }, 
        error: null 
      };
    } else {
      return { 
        data: null, 
        error: { message: 'Invalid email or password' } 
      };
    }
  },

  signOut: async () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('school_user');
    }
    return { error: null };
  },

  getCurrentUser: () => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('school_user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }
};