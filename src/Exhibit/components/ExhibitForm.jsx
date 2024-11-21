import React from "react";
import Form from "../../forms/components/Form";

const ExhibitForm = ({
    onSubmit,
    data,
}) => {
    return (
        <Form
            title={data._id ? "Edit Exhibit" : "Create Exhibit"}
            onSubmit={onSubmit}
            validateForm={() => true}
            styles={{ maxWidth: "800px" }}
            submitLabel={data._id ? "Update Exhibit" : "Create Exhibit"}
        >


        </Form>
    );
};

export default ExhibitForm;
