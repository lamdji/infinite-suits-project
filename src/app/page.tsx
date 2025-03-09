import { redirect } from 'next/navigation';
import { metadata } from "./metadata";

export const pageMetadata = metadata;
export default function Home() {
    redirect('/home');
}
