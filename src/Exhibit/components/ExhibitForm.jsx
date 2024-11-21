import React from "react";
import Form from "../../form/Form";
import Input from "../../form/Input";
import TextArea from "../../form/TextArea";
import SelectField from "../../form/Select";

const ExhibitForm = ({
    onSubmit,
    onInputChange,
    errors = {},
    data = {}, // Provide a default empty object for `data`
}) => {
    return (
        <Form
            title={data._id ? "Edit Exhibit" : "Create Exhibit"}
            onSubmit={onSubmit}
            validateForm={() => true}
            styles={{ maxWidth: "800px" }}
            submitLabel={data._id ? "Update Exhibit" : "Create Exhibit"}
        >
            {/* Name */}
            <Input
                name="name"
                label="Name"
                error={errors.name}
                onChange={onInputChange}
                data={data}
            />

            {/* Description (TextArea) */}
            <TextArea
                name="description"
                label="Description"
                error={errors.description}
                onChange={onInputChange}
                data={data}
                rows={4} // Set rows for multiline input
            />

            {/* Location (SelectField) */}
            <SelectField
                name="location"
                label="Location"
                error={errors.location}
                onChange={onInputChange}
                data={data}
                options={[
                    { value: "Africa", label: "Africa" },
                    { value: "Asia", label: "Asia" },
                    { value: "Europe", label: "Europe" },
                    { value: "North America", label: "North America" },
                    { value: "South America", label: "South America" },
                    { value: "Australia", label: "Australia" },
                    { value: "Antarctica", label: "Antarctica" },
                ]}
            />

            {/* Status (SelectField) */}
            <SelectField
                name="status"
                label="Status"
                error={errors.status}
                onChange={onInputChange}
                data={data}
                options={[
                    { value: "open", label: "Open" },
                    { value: "closed", label: "Closed" },
                    { value: "under maintenance", label: "Under Maintenance" },
                ]}
            />
        </Form>
    );
};

export default ExhibitForm;
