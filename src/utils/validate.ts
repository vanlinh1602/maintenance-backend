type Role = 'admin' | 'manager' | 'maintenance';

export const checkRoles = (session: any, role: Role[]) => {
  if (!session.user) {
    throw new Error('User not found');
  }

  if (session.user.isAdmin) return true;
  if (role.includes('manager') && session.user.isManager) return true;
  if (role.includes('maintenance') && session.user.isMaintenance) return true;
  return false;
};
