const Contact = () => {
    return (
        <div>
            <h2 className="w-6/12 text-3xl m-4 p-4">Contact Us Page</h2>
            <div>
            <input type="text" placeholder="name" className="border border-black m-4" />
            <input type="text" placeholder="message" className="border border-black m-4" />
            <button className="bg-slate-400 p-2 rounded">Submit</button>
            </div>
        </div>
    )
}

export default Contact;