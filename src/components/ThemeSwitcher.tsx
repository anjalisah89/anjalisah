'use server';

import { cookies } from 'next/headers';
export default async function ThemeSwitcher() {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');
  const currentTheme = theme?.value === 'light' ? 'light' : 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  return (
    <a href={`/appearance?theme=${newTheme}`} className="secondary">
      {newTheme === 'dark' ? 'Dark' : 'Light'} Mode
    </a>
  );
}
