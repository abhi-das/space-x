const DUMMY_LUANCH = [
    {
        id: 'e1',
        title: 'Programming for everyone',
        description:
            'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
        location: 'Somestreet 25, 12345 San Somewhereo',
        date: '2000-05-12',
        image: 'images/r1.jpg',
        isFeatured: false,
        isSuccess: true
    },
    {
        id: 'e2',
        title: 'Networking for introverts',
        description:
            "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: 'New Wall Street 5, 98765 New Work',
        date: '2001-05-30',
        image: 'images/r2.jpg',
        isFeatured: true,
        isSuccess: true
    },
    {
        id: 'e3',
        title: 'Networking for extroverts',
        description:
            'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
        location: 'My Street 12, 10115 Broke City',
        date: '2002-04-10',
        image: 'images/r3.jpg',
        isFeatured: true,
        isSuccess: false
    },
];

export function getFeaturedLaunch() {
    return DUMMY_LUANCH.filter((launch) => launch.isFeatured);
}

export function getAllLaunch() {
    return DUMMY_LUANCH;
}

export function getFilteredLaunch(dateFilter) {
    const [year, isSuccess] = dateFilter;
    let filteredLaunch = DUMMY_LUANCH.filter((launch) => {
        const launchDate = new Date(launch.date);
        return launchDate.getFullYear().toString() === year && launch.isSuccess.toString() === isSuccess;
    });

    return filteredLaunch;
}

export function getLaunchById(id) {
    return DUMMY_LUANCH.find((launch) => launch.id === id);
}