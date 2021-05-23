import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';

const AllEventsPage = () => {
    const events = getAllEvents();
    const router = useRouter();

    const findEventsHandler = async (year, month) => {
        try {
            const fullPath = `/events/${ year }/${ month }`;
            await router.push(fullPath);
        }
        catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <EventsSearch onSearch={ findEventsHandler } />
            <EventList items={ events } />
        </div>
    );
};

export default AllEventsPage;
