import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-data';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/UI/button';
import ErrorAlert from '../../components/UI/error-alert';

const FilteredEventsPage = () => {
    const router = useRouter();

    const filteredData = router.query.slug;

    if (!filteredData) {
        return <p className="center">Loading...</p>;
    }

    const [year, month] = filteredData;

    const numYear = +year;
    const numMonth = +month;

    const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
    const date = new Date(numYear, numMonth - 1);

    const checkUrlHandler = () => isNaN(numYear) || isNaN(+month) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12;



    if (checkUrlHandler()) return (
        <Fragment>
            <ErrorAlert>
                <p>Invalid filter. Please adjust your values!</p>
            </ErrorAlert>

            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </Fragment>
    );

    if (!filteredEvents || filteredEvents.length === 0) return (
        <Fragment>
            <ErrorAlert>
                <p>No events found for chosen filter!</p>
            </ErrorAlert>

            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </Fragment>
    );

    return (
        <Fragment>
            <ResultsTitle date={ date } />
            <EventList items={ filteredEvents } />
        </Fragment>
    );
};

export default FilteredEventsPage;
