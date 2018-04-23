import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';
import moment from 'moment';
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';


BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

ReactDOM.render(Router, document.getElementById('root'));
registerServiceWorker();
