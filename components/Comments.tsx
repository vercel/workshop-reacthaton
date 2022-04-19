import type { Comment } from "../types";

type Props = {
  comments: Comment[];
};

export const Comments: React.VFC<Props> = ({ comments }) => {
  return (
    <section aria-labelledby="comments-title" className="max-w-2xl">
      <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
        <div className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <h2
              id="comments-title"
              className="text-lg font-medium text-gray-900"
            >
              Comments
            </h2>
          </div>
          <div className="px-4 py-6 sm:px-6">
            <ul role="list" className="space-y-8">
              {comments.map((comment) => (
                <li key={comment.id}>
                  <div className="flex space-x-3">
                    <div>
                      <div className="text-sm">
                        <a href="#" className="font-medium text-gray-900">
                          {comment.author}
                        </a>
                      </div>
                      <div className="mt-1 text-sm text-gray-700">
                        <p>{comment.content}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-6 sm:px-6">
          <div className="flex space-x-3">
            <div className="min-w-0 flex-1">
              <form action="#">
                <div>
                  <label htmlFor="comment" className="sr-only">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={3}
                    className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Add a comment"
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
