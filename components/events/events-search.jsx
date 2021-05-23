import {useRef} from 'react';
import { getAllMonths } from '../../dummy-data';

import Button from '../UI/button';

import classes from './events-search.module.css';

const EventsSearch = (props) => {
    const yearInputRef  = useRef();
    const monthInputRef = useRef();
    const submitHandler = (event)=> {
        event.preventDefault();

        const selectedYear = yearInputRef.current?.value;
        const selectedMonth = monthInputRef.current?.value;

        props.onSearch(selectedYear, selectedMonth)
    }
    const months = getAllMonths();
    return (
        <form onSubmit={submitHandler} className={ classes.form }>
            <div className={ classes.controls }>
                <div className={ classes.control }>
                    <label htmlFor="year">Year</label>
                    <select ref={yearInputRef} name="year" id="year">
                        <option value="2021">2021</option>
                        <option value="2022">2020</option>
                    </select>
                </div>
                <div className={ classes.control }>
                    <label htmlFor="month">Month</label>
                    <select ref={monthInputRef} name="month" id="month">
                        { months.map(m => <option key={ m.value } value={ m.value }>{ m.label }</option>) }
                    </select>
                </div>
            </div>
            <Button>Find Event</Button>
        </form>
    );
};
export default EventsSearch;
