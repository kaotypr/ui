interface SWPerson {
	uid: string
	name: string
	url: string
	properties: {
		height: string
		mass: string
		hair_color: string
		skin_color: string
		eye_color: string
		birth_year: string
		gender: string
	}
}

interface SWAPIResponse {
	message: string
	total_records: number
	total_pages: number
	previous: string | null
	next: string | null
	results: Array<{
		uid: string
		name: string
		url: string
	}>
}

interface SWAPIDetailResponse {
	message: string
	result: {
		properties: SWPerson["properties"]
		description: string
		_id: string
		uid: string
		__v: number
	}
}

export interface Person {
	id: string
	name: string
	height: string
	mass: string
	birthYear: string
	gender: string
}

export async function fetchPeople(
	page: number,
	limit: number,
): Promise<{
	data: Person[]
	totalPages: number
	totalRecords: number
}> {
	try {
		const response = await fetch(`https://swapi.tech/api/people?page=${page}&limit=${limit}`)
		const data: SWAPIResponse = await response.json()

		// Fetch detailed information for each person
		const detailedPeople = await Promise.all(
			data.results.map(async (person) => {
				const detailResponse = await fetch(`https://swapi.tech/api/people/${person.uid}`)
				const detailData: SWAPIDetailResponse = await detailResponse.json()

				return {
					id: person.uid,
					name: person.name,
					height: detailData.result.properties.height,
					mass: detailData.result.properties.mass,
					birthYear: detailData.result.properties.birth_year,
					gender: detailData.result.properties.gender,
				}
			}),
		)

		return {
			data: detailedPeople,
			totalPages: data.total_pages,
			totalRecords: data.total_records,
		}
	} catch (error) {
		console.error("Error fetching Star Wars data:", error)
		return {
			data: [],
			totalPages: 0,
			totalRecords: 0,
		}
	}
}
