import React from 'react';

const ProductDetails = ({product}) => {
    const { name, img, reprice, description} = product
    return (
        <div class="min-w-full divide-y divide-gray-300">
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img class="h-10 w-10 rounded-full" src={img} alt=""/>
                    </div>
                    <div class="ml-4">
                      <div class="font-medium text-gray-900">{name}</div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div class="text-gray-900">{description}</div>
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <button><span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Active</span></button>
                  <button><span class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">Sold</span></button>
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{reprice}</td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="/" class="text-indigo-600 hover:text-indigo-900" alt="">Add</a>
                </td>
              </tr>

              {/* <!-- More people... --> */}
            </tbody>
        </div>
    );
};

export default ProductDetails;