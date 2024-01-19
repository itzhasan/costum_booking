export const ServiceMenu = () => {
  return (
    <div className="px-9">
      <div className="flex justify-center p-11">
        <h1 className="font-semibold text-4xl">
          {" "}
          Create your own service menu{" "}
        </h1>
      </div>
     
      <table className="">
        <tr>
          <th>Service Title </th>
          <th> Duration (min) </th>
          <th> Price (IQD)</th>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder=""
              className="w-full h-[10px]  outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base  pr-[45px] pl-[20px] py-[20px]"
            />
          </td>
          <td>
            <input
              type="text"
              placeholder=""
              className="w-full h-[10px]  outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base  pr-[45px] pl-[20px] py-[20px]"
            />
          </td>
          <td>
            <input
              type="text"
              placeholder=""
              className="w-full h-[10px]  outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base  pr-[45px] pl-[20px] py-[20px]"
            />
          </td>
          <td>
            <h1>x</h1>
          </td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  );
};
