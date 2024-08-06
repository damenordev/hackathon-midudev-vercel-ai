import { redirect } from 'next/navigation'

export default async function HomePage() {
  return redirect('/recommender/basic-information')
}
