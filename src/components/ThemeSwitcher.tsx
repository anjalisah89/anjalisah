'use server';
import { setThemeCookie } from '@/app/utils/actions';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export default async function ThemeSwitcher() {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');
  const currentTheme = theme?.value === 'light' ? 'light' : 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  async function toggleTheme() {
    'use server';
    await setThemeCookie(newTheme);
    revalidatePath('/');
  }

  return (
    <form action={toggleTheme}>
      <button type="submit" className='secondary'>
        {newTheme === 'dark' ? 'Dark' : 'Light'} Mode
      </button>
    </form>
  );
}
