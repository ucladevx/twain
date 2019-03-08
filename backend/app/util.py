from dateutil import parser
import datetime, time

def convertDateToRFC3339(date):
    # Parse date into datetime object
    date_time = parser.parse(date)

    # Return RFC3339 date after switching to UTC format
    return datetime.datetime.utcfromtimestamp(time.mktime(date_time.timetuple())).isoformat('T') + 'Z'