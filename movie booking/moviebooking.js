        // Function to handle adding user details
        function addUserDetails() {
            const username = document.getElementById('username').value;
            const seatNumber = document.getElementById('seatNumber').value;

            // Check if seat number is already booked
            const userDetails = document.querySelectorAll('#userDetails div');
            for (const detail of userDetails) {
                const detailSeatNumber = detail.textContent.split(',')[1].trim().split(':')[1].trim();
                if (detailSeatNumber === seatNumber) {
                    alert('Seat already booked!');
                    return;
                }
            }

            // Create a new div element to display user details
            const userDetailsDiv = document.createElement('div');
            userDetailsDiv.textContent = `Username: ${username}, Seat Number: ${seatNumber}`;

            // Append user details to userDetails div
            document.getElementById('userDetails').appendChild(userDetailsDiv);

            // Update total booking count
            const totalBooking = document.getElementById('totalBooking');
            totalBooking.textContent = parseInt(totalBooking.textContent) + 1;

            // Clear input fields after adding user details
            document.getElementById('username').value = '';
            document.getElementById('seatNumber').value = '';
        }

        // Event listener for Add button
        document.getElementById('addButton').addEventListener('click', addUserDetails);

        // Function to check seat availability
        function checkSeatAvailability() {
            const seatNumber = document.getElementById('searchSlot').value;
            const userDetails = document.querySelectorAll('#userDetails div');
            let isAvailable = true;

            for (const detail of userDetails) {
                const detailSeatNumber = detail.textContent.split(',')[1].trim().split(':')[1].trim();
                if (detailSeatNumber === seatNumber) {
                    isAvailable = false;
                    break;
                }
            }

            const findSlotResult = document.getElementById('searchSlot');
            if (isAvailable) {
                findSlotResult.textContent = `Seat ${seatNumber} is available.`;
            } else {
                findSlotResult.textContent = `Seat ${seatNumber} is not available.`;
            }
        }

        // Event listener for Find Slot button
        document.getElementById('findSlotButton').addEventListener('click', checkSeatAvailability);