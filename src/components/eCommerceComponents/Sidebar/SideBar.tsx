"use client";

const Sidebar = () => {
  return (
    <aside className="w-64 pr-8">
      <h2 className="font-semibold mb-4">Category</h2>
      <ul className="space-y-2">
        <li>T-Shirt</li>
        <li className="text-indigo-600 font-medium">Sweatshirt</li>
        <li>Dress</li>
        <li>Pants and Skirt</li>
        <li>Sweater</li>
        <li>Stuff and Accessories</li>
      </ul>
      <h2 className="font-semibold mt-8 mb-4">Filter by:</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Type</h3>
          <ul className="space-y-1">
            <li>
              <label>
                <input type="checkbox" className="mr-2" />
                Basic
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="mr-2" />
                Pattern
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="mr-2" />
                Hoodie
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="mr-2" />
                Zipper
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="mr-2" checked />
                Oversize
              </label>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2">Colour</h3>
          <ul className="space-y-1">
            <li>
              <label>
                <input type="checkbox" className="mr-2" />
                Black
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="mr-2" />
                Red
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="mr-2" />
                Brown
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="mr-2" checked />
                Multicolour
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="mr-2" />
                Grey
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="mr-2" />
                Blue
              </label>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2">Size</h3>
        </div>
        <div>
          <h3 className="font-medium mb-2">Price</h3>
        </div>
        <button className="w-full bg-indigo-600 text-white py-2 rounded">
          Apply
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
