import { countries } from '../countrylist';
import CountryInfo from '../components/card'




export default function CountryPage({ params }: { params: { country: string } }) {
    const country = countries.find(c =>
        c.name.toLowerCase() === params.country.toLowerCase()
    );

    if (!country) {
        return <div>Country not found</div>;
    }

    return (
        <main className='flex flex-col gap-5 justify-center items-center mt-6'>
            <CountryInfo props={country} />

        </main>
    );
}

