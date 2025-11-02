import Hero from '../Hero';

export default function HeroExample() {
  return <Hero onEnter={() => console.log('Enter app clicked')} />;
}
