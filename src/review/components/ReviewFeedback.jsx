import React from "react";
import Reviews from "./Reviews";
import Loader from "../../general/Loader";
import Error from "../../general/Error";

export default function ReviewFeedback({
    isLoading,
    reviews,
    error,

}) {
    if (isLoading) return <Loader />;
    if (error) return <Error errorMessage={error} />;
    if (!reviews || reviews.length === 0) return <Error errorMessage="Oops...no reviews to display" />;

    return <></>;
}
