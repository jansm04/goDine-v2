import Place from "@/interfaces/place"

const error: Place = {
    id: "error",
    formattedAddress: "",
    location: {
        longitude: 0,
        latitude: 0
    },
    rating: 0,
    websiteUri: "",
    priceLevel: "",
    displayName: {
        text: "A problem occurred fetching the response. Please try again.",
        languageCode: ""
    }
}

export default error;