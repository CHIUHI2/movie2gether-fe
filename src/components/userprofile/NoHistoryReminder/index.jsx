import "./index.css";

const NoBookingHistoryRemind = (sessions) => {
    if (sessions.sessions.length <= 0){
      return (
        <div className="no-booking-history">I have no watched movies</div>
        )
    }
        return <div />
}

export default NoBookingHistoryRemind;

