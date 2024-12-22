const Booking = require('../models/booking');

const bookingController = {

    getAllBookings: async (req, res) => {
        try {
           const bookings = await Booking.find();
           return res.status(200).json({bookings });

        } catch (error) {
           return res.status(500).json({ error: error.message });
        }
    },
    createBooking: async (req, res) => {
        try {
           const userId = req.user.id;
           const { vehicles, total } = req.body;
           const booking = new Booking({ user: userId, vehicles, total,status: 'completed' });
           await booking.save();
           return res.status(200).json(booking);

        } catch (error) {
           return res.status(500).json({ error: error.message });
        }
    },
    getBookingById: async (req, res) => {
        try {
            const { id } = req.params;
            const booking = await Booking.findById(id);
            return res.status(200).json(booking);

        } catch (error) {
           return res.status(500).json({ error: error.message });
        }
    },
    updateBooking: async (req, res) => {
        try {
          const { id } = req.params;
          const { vehicles, total, status } = req.body;

          const booking = await Booking.findById(id);

          if(!booking) {

              return res.status(404).json({massage: "Booking not found" });
          }
          await Booking.findByIdAndUpdate(id, { vehicles, total, status });

          return res.status(200).json({massage : "Booking updated successfully"} );

        } catch (error) {
           return res.status(500).json({ error: error.message });
        }
    },
    deleteBooking: async (req, res) => {
        try {
           const { id } = req.params;
           const booking = await Booking.findById(id);

           if(!booking) {
               return res.status(404).json({massage: "Booking not found" });
           }

           await Booking.findByIdAndDelete(id);
           return res.status(200).json({massage : "Booking deleted successfully"} );
        } catch (error) {
           return res.status(500).json({ error: error.message });
        }
    }
    
}

module.exports = bookingController;