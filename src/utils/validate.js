export function validate(data) {
  if (!data.senderAddress?.street?.trim()) {
    return {
      target: "senderStreet",
      message: "Jo‘natuvchi  manzilini yozing",
    };
  }

  if (!data.senderAddress?.city?.trim()) {
    return {
      target: "senderCity",
      message: "Jo‘natuvchi shahrini yozing",
    };
  }

  if (!data.senderAddress?.postCode?.trim()) {
    return {
      target: "senderPostCode",
      message: "Jo‘natuvchi pochta kodini yozing",
    };
  }

  if (!data.senderAddress?.country?.trim()) {
    return {
      target: "senderCountry",
      message: "Jo‘natuvchi davlatini yozing",
    };
  }
  if (!data.clientName?.trim())
    return { target: "clientName", message: "Mijoz ismini yozing" };

  if (!data.clientEmail?.trim())
    return { target: "clientEmail", message: "Mijoz emailini yozing" };

  if (!data.clientAddress?.street?.trim()) {
    return {
      target: "streetAddress",
      message: "Mijoz manzilini yozing",
    };
  }

  if (!data.clientAddress?.city?.trim()) {
    return { target: "city", message: "Mijoz shahrini yozing" };
  }

  if (!data.clientAddress?.postCode?.trim()) {
    return { target: "postCode", message: "Mijoz pochta kodini yozing" };
  }

  if (!data.clientAddress?.country?.trim()) {
    return { target: "country", message: "Mijoz davlatini yozing" };
  }

  if (!data.paymentDue)
    return {
      target: "invoiceDate",
      message: "Invoice sanasini kiriting",
    };

  if (!data.description?.trim())
    return {
      target: "projectDescription",
      message: "Loyiha description yozing",
    };
  if (!data.items.length)
    return {
      target: "items",
      message: "Kamida bitta items qo‘shing",
    };

  return false;
}
