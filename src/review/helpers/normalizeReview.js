const normalizeReview = (review, visitorId) => {
    return {
        visitorId,  // Ensure visitorId is passed
        rating: Number(review.rating), // Ensure rating is a number
        comment: review.comment?.trim() || null, // Trim the comment and set null if empty
        exhibitId: review.exhibitId || null,
        animalId: review.animalId || null,
        likes: review.likes || [],
        date: new Date(),
    };
};


export default normalizeReview;
