import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import events from '../events'
import moment from 'moment';
import Services from '../services';

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Basic extends Component {
	constructor() {
		super();
		this.state = {
			calendarData: null,
			apiDataLoaded: false
		}
	}

	componentDidMount() {
		let event_data =[]
		Services.getAllTrips()
			.then(data => {
				console.log("data back", data)

				for(let i=0;i < data.data.data.length; i++) {
					let singleEvent = {}
					singleEvent.id = data.data.data[i].id
					singleEvent.title = data.data.data[i].destination
					singleEvent.allDay = true
					singleEvent.desc = data.data.data[i].details

					let departure = data.data.data[i].date_of_dep
					let arrival = data.data.data[i].date_of_arr
					let depArray = departure.split("-")
					let arrArray = arrival.split("-")
					let depDate = new Date(depArray[0], depArray[1]-1, depArray[2])
					let arrDate = new Date(arrArray[0], arrArray[1]-1, arrArray[2])

					singleEvent.start = depDate
					singleEvent.end = arrDate

					event_data.push(singleEvent)
					console.log(depArray)

				}
				console.log(event_data)
				console.log(data.data.data)
				
				this.setState({
					calendarData: event_data,
					apiDataLoaded: true
				})
			})
			.catch(err => {
				console.log(err)
			})
	}




	render() {
		return(
			<div className="calendarDiv">
			{this.state.apiDataLoaded ? 
			  <BigCalendar className="calendar"
			    events={this.state.calendarData}
			    views={allViews}
			    step={60}
			    showMultiDayTimes
			    defaultDate={new Date(2018, 3, 1)}
			  />
			  : "Loading Calendar..."}
			</div>
			)
	}


}

export default Basic