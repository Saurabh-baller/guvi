import TourModal from "../models/tour";

export const createTour = async (req, res) => {
  const tour = req.body;
  const newTour = new TourModal({
    ...tour,
    createdAt: new Date().toISOString(),
  });

  try {
    await newTour.save();
    res.status(201).json(newTour);
  } catch (error) {
    res.status(404).json({ Message:"Something went wrong" });
  }
};

export const getTour = async (req, res) => {
  try {
    const tours = await TourModal.find();
    res.status(200).json(tours);

  } catch(error) {
   res.status(400).json({message:"Something went wrong"})
  }
};
