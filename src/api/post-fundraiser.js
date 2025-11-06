
async function postFundraiser(fundraiser) {
    const url = `${import.meta.env.VITE_API_URL}/fundraisers/`;


const payload = {
    title: fundraiser.title,
    description: fundraiser.description,
    goal: fundraiser.goal,
    image: fundraiser.image, // ✅ now a URL
    is_open: true,
};


    console.log("Sending payload:", {
        ...payload,
        image: fundraiser.image?.slice(0, 100), // log only first 100 characters
    });

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${fundraiser.token}`,
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("API error response:", errorText);
        throw new Error(`Error creating fundraiser: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

export default postFundraiser
