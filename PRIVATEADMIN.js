const ipList = JSON.parse(localStorage.getItem('ipv4List'));

function retrieve() {
    const tableParent = document.getElementById('table');
    ipList.forEach((entry, index) => {
        var newID = document.createElement('p');
        newID.style.color = 'green';
        newID.textContent = `IP: ${entry.ip}, Time: ${entry.time}`;
        const deleteButton = document.createElement('button');deleteButton.textContent = 'X';
        deleteButton.style.marginLeft = '10px'
        deleteButton.style.height = '20px'; deleteButton.style.width = '20px';
        deleteButton.style.borderRadius = '2px';
        deleteButton.style.background = 'red';
        deleteButton.style.color = 'gray';
        deleteButton.addEventListener('click', function() {tableParent.removeChild(newID);ipList.splice(index, 1);
            localStorage.setItem('ipv4List', JSON.stringify(ipList));});
        newID.appendChild(deleteButton);tableParent.appendChild(newID);});}if (ipList && ipList.length > 0) {retrieve();}else {const noIpMessage = document.createElement('p');
    noIpMessage.textContent = 'No IP addresses found inlocal storage.';
    document.getElementById('table').appendChild(noIpMessage);}