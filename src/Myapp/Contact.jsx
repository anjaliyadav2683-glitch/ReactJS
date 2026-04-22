import React, { useState } from 'react'


function Contaccte() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${name}! We will contact you soon.`);
    };

    return (
        <div className="page">
            <h2>Contact Us 💌</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default Contaccte