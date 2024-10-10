import { countries } from '../countrylist';
import Link from 'next/link';

interface CountryInfo {
    name: string;
    population: string;
    capital: string;
}

const CountryInfo: React.FC<{ country: CountryInfo }> = ({ country }) => {
    return (
        <main className='flex flex-col gap-5 justify-center items-center mt-6'>
            <div className='bg-neutral-800 p-8 rounded-sm w-auto flex flex-col lg:gap-20 gap-14 justify-center align-middle'>
                <h1 className='lg:text-9xl text-6xl font-black'>{country.name}</h1>
                <p className='text-2xl lg:text-3xl font-mono'><b className='font-bold font-sans'>Population:</b> {country.population}</p>
                <p className='text-2xl lg:text-3xl font-thin'><b className='font-bold font-sans'>Capital:</b> {country.capital}</p>
                <Link href={'/'} className='bg-black p-2 rounded-xl w-32 hover:bg-zinc-950 transition-colors flex justify-center align-middle'>Back</Link>
            </div>
        </main>
    );
};

export default function CountryPage({ params }: { params: { country: string } }) {
    const country = countries.find(c =>
        c.name.toLowerCase() === params.country.toLowerCase()
    );

    if (!country) {
        return <div>Country not found</div>;
    }

    return <CountryInfo country={country} />;
}

