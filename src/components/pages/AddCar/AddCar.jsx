import { getAuth } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const AddCar = () => {
  
     const auth = getAuth();
        const userEmail = auth.currentUser?.email || 'Guest'; 
        const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target
        const model=form.model.value;
        const dailyPrice=form.dailyPrice.value;
        const availability=form.availability.value;
        const registrationNumber=form.registrationNumber.value;
        const features = form.features.value.split(',').map((feature) => feature.trim());
        const description=form.description.value
        const bookingCount = Number(form.bookingCount.value) || 0;
        const carImage=form.carImage.value;
        const location=form.location.value
        const addedDate=new Date().toLocaleDateString()
       const carData={model,dailyPrice,availability,registrationNumber,features,description,bookingCount,carImage,location,userEmail,addedDate}
       console.log(carData)

        fetch('http://localhost:5000/cars',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(carData)
        })
        .then(res =>res.json())
        .then(data =>{
            toast.success('Added Car Successfully')
            setTimeout(()=>{
                navigate('/myCars')
            },1000)
            console.log(data)})

    }
    return (
        <div>
             <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Add Car Details</h2>
            <form onSubmit={handleSubmit}>
                {/* Model */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Car Model</span>
                    </label>
                    <input
                        type="text"
                        name="model"
                        placeholder="Car Model"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

              
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Daily Rental Price</span>
                    </label>
                    <input
                        type="text"
                        name="dailyPrice"
                        placeholder="Daily Rental Price"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

              
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Availability</span>
                    </label>
                    <select
                        name="availability"
                        className="select select-bordered w-full"
                    >
                        <option value="">Select Availability</option>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                    </select>
                </div>

                {/* Registration Number */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Vehicle Registration Number</span>
                    </label>
                    <input
                        type="text"
                        name="registrationNumber"
                        placeholder="Registration Number"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Features */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Features (Comma Separated)</span>
                    </label>
                    <input
                        type="text"
                        name="features"
                        placeholder="Features (e.g., GPS, AC)"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Description */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        name="description"
                        placeholder="Description"
                        className="textarea textarea-bordered w-full"
                    />
                </div>

                {/* Booking Count */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Booking Count</span>
                    </label>
                    <input
                        type="number"
                        name="bookingCount"
                        placeholder="Booking Count"
                        className="input input-bordered w-full"
                        defaultValue={0}
                    />
                </div>

                {/* Image URL */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        type="text"
                        name="carImage"
                        placeholder="Car Image URL"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Location */}
                <div className="form-control mb-6">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Submit Button */}
                <div className="form-control">
                    <button type="submit" className="btn btn-primary w-full">
                        Add Car
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddCar;