import { useState } from "react";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState("");
  const [compareAtPrice, setCompareAtPrice] = useState("");
  const [SKU, setSKU] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [showFirst, setShowFirst] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("thumbnail", thumbnail);
    images.forEach((image, index) => {
      formData.append(`image${index + 1}`, image);
    });
    formData.append("price", price);
    formData.append("compareAtPrice", compareAtPrice);
    formData.append("SKU", SKU);
    formData.append("category", category);
    formData.append("status", status);
    formData.append("tags", tags);
    formData.append("isFeatured", isFeatured);
    formData.append("showFirst", showFirst);
    console.log(formData);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };
  return (
    <section className="py-16 bg-stone-100 font-poppins dark:bg-gray-800">
      <div className="max-w-4xl px-4 py-4 mx-auto bg-white border shadow-sm dark:border-gray-900 dark:bg-gray-900 lg:py-4 md:px-6">
        <div className="mb-10 ">
          <h2 className="pb-2 mb-2 text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
            Product Information
          </h2>
          <p className="text-sm dark:text-gray-400">
            Enter the details for your product.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium dark:text-gray-400"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
              placeholder="Product title"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium dark:text-gray-400"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Product description"
              required
              className="block w-full px-4 py-6 leading-tight placeholder-gray-400 bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
            ></textarea>
          </div>
          <div className="mb-6">
            <label htmlFor="Thumbnail">Thumbnail</label>
            <div className="relative">
              <label
                title="Click to upload"
                htmlFor="Thumbnail"
                className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker dark:hover:before:border-gray-500 before:bg-gray-100 dark:before:border-gray-600 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              >
                <div className="w-max relative">
                  <img
                    className="w-12"
                    src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                    alt="file upload icon"
                    width="512"
                    height="512"
                  />
                </div>
                <div className="relative">
                  <span className="block text-base font-semibold relative text-blue-900 dark:text-white group-hover:text-blue-500">
                    Upload a file
                  </span>
                  <span className="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">
                    Max 2 MB
                  </span>
                </div>
              </label>
              <input
                hidden=""
                className="hidden"
                onChange={(e) => setThumbnail(e.target.value)}
                accept="image/*"
                name="Thumbnail"
                id="Thumbnail"
                type="file"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="Images">Images</label>
            <div className="relative">
              <label
                title="Click to upload"
                htmlFor="Images"
                className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker dark:hover:before:border-gray-500 before:bg-gray-100 dark:before:border-gray-600 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              >
                <div className="w-max relative">
                  <img
                    className="w-12"
                    src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                    alt="file upload icon"
                    width="512"
                    height="512"
                  />
                </div>
                <div className="relative">
                  <span className="block text-base font-semibold relative text-blue-900 dark:text-white group-hover:text-blue-500">
                    Upload a file
                  </span>
                  <span className="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">
                    Max 2 MB
                  </span>
                </div>
              </label>
              <input
                hidden=""
                className="hidden"
                onChange={(e) => handleImageChange(e)}
                accept="image/*"
                multiple
                name="Images"
                id="Images"
                type="file"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium dark:text-gray-400"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
              placeholder="Product price"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="compareAtPrice"
              className="block mb-2 text-sm font-medium dark:text-gray-400"
            >
              Compare At Price
            </label>
            <input
              type="number"
              name="compareAtPrice"
              id="compareAtPrice"
              value={compareAtPrice}
              onChange={(e) => setCompareAtPrice(e.target.value)}
              className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
              placeholder="Compare at price"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="SKU"
              className="block mb-2 text-sm font-medium dark:text-gray-400"
            >
              SKU
            </label>
            <input
              type="text"
              name="SKU"
              id="SKU"
              value={SKU}
              onChange={(e) => setSKU(e.target.value)}
              className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
              placeholder="Product SKU"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium dark:text-gray-400"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
              placeholder="Product category"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium dark:text-gray-400"
            >
              Status
            </label>
            <input
              type="text"
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
              placeholder="Product status"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="tags"
              className="block mb-2 text-sm font-medium dark:text-gray-400"
            >
              Tags
            </label>
            <input
              type="text"
              name="tags"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
              placeholder="Product tags"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="isFeatured"
              className="block mb-2 text-sm font-medium dark:text-gray-400"
            >
              Is Featured
            </label>
            <input
              type="checkbox"
              name="isFeatured"
              id="isFeatured"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
              className="form-checkbox h-5 w-5 text-gray-600 border rounded dark:border-gray-800 dark:bg-gray-800 focus:ring-0"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="showFirst"
              className="block mb-2 text-sm font-medium dark:text-gray-400"
            >
              Show First
            </label>
            <input
              type="checkbox"
              name="showFirst"
              id="showFirst"
              checked={showFirst}
              onChange={(e) => setShowFirst(e.target.checked)}
              className="form-checkbox h-5 w-5 text-gray-600 border rounded dark:border-gray-800 dark:bg-gray-800 focus:ring-0"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-base text-gray-100 bg-blue-600 rounded hover:bg-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddProduct;
