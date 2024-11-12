import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import AppContext from '../data/AppContext';

const EditForm = () => {
  const { dispatch, items } = useContext(AppContext);
  const { id } = useParams();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const item = items.find(i => i.id === parseInt(id, 10));

  useEffect(() => {
    if (item) {
      setValue("id", item.id);
      setValue("name", item.name);
      setValue("description", item.description);
      setValue("rating", item.rating);
    }
  }, [item, setValue]);

  const onSubmit = (data) => {
    dispatch({
      type: 'edit',
      item: {
        id: parseInt(data.id, 10),
        name: data.name,
        description: data.description,
        rating: parseInt(data.rating, 10)
      }
    });
  };

  return (
    <div>
      <h2>Edit Object</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("id")} />

        <div>
          <label>Name:</label>
          <input
            type="text"
            {...register("name", { required: "Name is required", maxLength: 50 })}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>

        <div>
          <label>Description:</label>
          <input
            type="text"
            {...register("description", { required: "Description is required", maxLength: 100 })}
          />
          {errors.description && <p className="text-danger">{errors.description.message}</p>}
        </div>

        <div>
          <label>Rating:</label>
          <input
            type="number"
            {...register("rating", {
              required: "Rating is required",
              min: { value: 0, message: "Minimum rating is 0" },
              max: { value: 10, message: "Maximum rating is 10" }
            })}
          />
          {errors.rating && <p className="text-danger">{errors.rating.message}</p>}
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditForm;
