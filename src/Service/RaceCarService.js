const RaceCarService = {
    forward: function () {
        return fetch(encodeURI(`${process.env.REACT_APP_RACE_CAR_API_URL}/go`))
            .then(console.log)
            .catch(err => {
                console.log("Request error: " + err);
            });
    },
    stop: function () {
        return fetch(encodeURI(`${process.env.REACT_APP_RACE_CAR_API_URL}/stop`))
            .then(console.log)
            .catch(err => {
                console.log("Request error: " + err);
            });
    },
    spinLeft: function () {
        return fetch(encodeURI(`${process.env.REACT_APP_RACE_CAR_API_URL}/spinLeft`))
            .then(console.log)
            .catch(err => {
                console.log("Request error: " + err);
            });
    },
    spinRight: function () {
        return fetch(encodeURI(`${process.env.REACT_APP_RACE_CAR_API_URL}/spinRight`))
            .then(console.log)
            .catch(err => {
                console.log("Request error: " + err);
            });
    },
    turnLeft: function () {
        return fetch(encodeURI(`${process.env.REACT_APP_RACE_CAR_API_URL}/left`))
            .then(console.log)
            .catch(err => {
                console.log("Request error: " + err);
            });
    },
    turnRight: function () {
        return fetch(encodeURI(`${process.env.REACT_APP_RACE_CAR_API_URL}/right`))
            .then(console.log)
            .catch(err => {
                console.log("Request error: " + err);
            });
    },
    backward: function () {
        return fetch(encodeURI(`${process.env.REACT_APP_RACE_CAR_API_URL}/back`))
            .then(console.log)
            .catch(err => {
                console.log("Request error: " + err);
            });
    },
};

export default RaceCarService;