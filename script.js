
// Dashboard Page

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'ECG', 'Customer', 'Patient'],
        ['Feb', 2000, 1220, 110],
        ['Mar', 2375, 1456, 135],
        ['Apr', 2897, 1000, 98],
        ['May', 3051, 1300, 100],
        ['June', 3234, 1867, 183],
        ['July', 3488, 1869, 107],
    ]);

    var options = {
        // curveType: 'function',
        legend: { position: 'bottom' },
        width: 810,
        height: 500
    };

    var chart = new google.visualization.LineChart(document.getElementById('graphData'));

    chart.draw(data, options);
}

// Sign In Page
const signInForm = document.getElementById('signInForm');
const username = document.getElementById('userID');
const password = document.getElementById('pass');
const feedback = document.getElementById('feedback');

username.addEventListener('focus', () => feedback.innerHTML = '')
password.addEventListener('focus', () => feedback.innerHTML = '')

signInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (username.value === '' && password.value === '') {
        feedback.innerHTML = '<em>ID and password do not match</em>';
    } else {
        if (username.value === '') {
            feedback.innerHTML = '<em>Please enter a username</em>';
        } else if (password.value === '') {
            feedback.innerHTML = '<em>Please enter a password</em>';
        } else {
            feedback.innerHTML = '';
            // signInForm.submit();
            window.location = './dashboard.html'
        }
    }

});