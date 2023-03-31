const API_URL = 'http://localhost:3001';

class User {
  async getAll() {
    const response = await fetch(`${API_URL}/user`);
    const data = await response.json();
    return data;
  }

  async getById(id) {
    const response = await fetch(`${API_URL}/user/${id}`);
    const data = await response.json();
    return data;
  }

  async create(user) {
    const response = await fetch(`${API_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  }

  async update(id, user) {
    const response = await fetch(`${API_URL}/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  }

  async delete(id) {
    const response = await fetch(`${API_URL}/user/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  }
}

export const userService = {
  user: new User(),
};
