import React from 'react';
import { createClient } from 'D:/proj/Golf Web App v2/golf-app/utils/supabase/server'
import { cookies } from 'next/headers'

interface WelcomeProps {
  name: string;
  username: string;
  handicap: number;
}

const userAdmin = {
  name: 'John Doe',
  username: 'johndoe123',
  handicap: 10,
};

export default async function Welcome({ name, username, handicap }: WelcomeProps) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()
 
  name = userAdmin.name;
  username = userAdmin.username;
  handicap = userAdmin.handicap;

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Your username is: {username}</p>
      <p>Your handicap is: {handicap}</p>
      <button className="btn-primary">
        Click Me
      </button>
    
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
    </div>
  );
}
