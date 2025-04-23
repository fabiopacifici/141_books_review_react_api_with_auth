import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvide({ children }) {
  const loginUrl = "http://localhost:3000/login"; // Replace with your actual registration URL
  const [user, setUser] = useState(null);

  /* Check if the user is already logged in */
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      // Directly set the stored user first
      setUser(JSON.parse(storedUser))

      // Verify the session is still valid
      fetch(loginUrl, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(JSON.parse(storedUser))
      })
        .then(res => {
          if (!res.ok) {
            // If session is invalid, log out
            logout();
          }
        })
        .catch(() => {
          // On error, log out
          logout();
        });
    }
  }, [])

  function login(email, password) {

    return fetch(loginUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.user) setUser(data.user);

        // Store the user in local storage
        localStorage.setItem('user', JSON.stringify(data.user));
        return data
      })

  }

  function logout() {

    setUser(null);
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )

}

export function useAuth() {
  return useContext(AuthContext);
}