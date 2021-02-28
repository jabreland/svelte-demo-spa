import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import Contact from './pages/Contact.svelte';
import Layout from './components/layout/Layout.svelte';
// Routes for the App

export const routes = [
  { name: "/", component: Home, layout: Layout },
  { name: "/about", component: About, layout: Layout },
  { name: "/contact", component: Contact, layout: Layout }
];