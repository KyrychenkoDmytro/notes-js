export const setNewObjCategory = (notes) => {
    const categoryCounts = {};

    notes.forEach(note => {
        const { category, archived, imgUrl } = note;
        if (!categoryCounts[category]) {
          categoryCounts[category] = { total: 0, archived: 0, imgUrl};
        }
        categoryCounts[category].total++;
        if (archived) {
          categoryCounts[category].archived++;
        }
      });

    return categoryCounts;
};