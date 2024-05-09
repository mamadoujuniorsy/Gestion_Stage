import React from 'react';
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
const Table = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="overflow-x-auto">
        <div className="inline-block w-full max-w-[1000px] py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="w-full text-center text-sm font-light">
              <thead className="border-b bg-neutral-200 font-medium text-black dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                  <th scope="col" className="px-6 py-4">Prénom</th>
                  <th scope="col" className="px-6 py-4">Nom</th>
                  <th scope="col" className="px-6 py-4">Email</th>
                  <th scope="col" className="px-6 py-4">Date dépot</th>
                  <th scope="col" className="px-6 py-4">statut</th>
                  <th scope="col" className="px-6 py-4"></th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4">Moboutou</td>
                  <td className="whitespace-nowrap px-6 py-4">Noisette</td>
                  <td className="whitespace-nowrap px-6 py-4">moboutou@gmail.com</td>
                  <td className="whitespace-nowrap px-6 py-4">22/05/2024</td>
                  <td className="whitespace-nowrap px-6 py-4">Accepté</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <HiPencil color='blue' fontSize={25}/>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <MdDelete color='red'fontSize={25}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
