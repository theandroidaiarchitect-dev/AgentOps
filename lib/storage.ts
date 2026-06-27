// localStorage utilities for demo mode

export const storage = {
  getUser: () => {
    try {
      const user = localStorage.getItem('agentops_user');
      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  },

  setUser: (user: any) => {
    localStorage.setItem('agentops_user', JSON.stringify(user));
  },

  removeUser: () => {
    localStorage.removeItem('agentops_user');
  },

  getApiKeys: () => {
    try {
      const keys = localStorage.getItem('agentops_api_keys');
      return keys ? JSON.parse(keys) : [];
    } catch {
      return [];
    }
  },

  setApiKeys: (keys: any[]) => {
    localStorage.setItem('agentops_api_keys', JSON.stringify(keys));
  },

  addApiKey: (key: any) => {
    const keys = storage.getApiKeys();
    keys.push(key);
    storage.setApiKeys(keys);
  },

  removeApiKey: (id: string) => {
    const keys = storage.getApiKeys();
    storage.setApiKeys(keys.filter((k: any) => k.id !== id));
  },

  getBudgetConfig: () => {
    try {
      const config = localStorage.getItem('agentops_budget_config');
      return (
        config ? JSON.parse(config) : {
          enabled: true,
          monthlyLimit: 500,
          alertThreshold: 80,
          webhookUrl: '',
        }
      );
    } catch {
      return {
        enabled: true,
        monthlyLimit: 500,
        alertThreshold: 80,
        webhookUrl: '',
      };
    }
  },

  setBudgetConfig: (config: any) => {
    localStorage.setItem('agentops_budget_config', JSON.stringify(config));
  },

  getTeamMembers: () => {
    try {
      const members = localStorage.getItem('agentops_team_members');
      return members ? JSON.parse(members) : [];
    } catch {
      return [];
    }
  },

  setTeamMembers: (members: any[]) => {
    localStorage.setItem('agentops_team_members', JSON.stringify(members));
  },
};
