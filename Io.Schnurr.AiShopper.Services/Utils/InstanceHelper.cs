using System.Reflection;

namespace Io.Schnurr.AiShopper.Services.Utils;

internal static class InstanceHelper
{
    /// <summary>
    /// Creates an instance of an type which is not accessible in the current code.
    /// Is used when trying to instantiate an object of a library which has noch public factory members.
    /// </summary>
    /// <typeparam name="T">The type of the object to instantiate.</typeparam>
    /// <param name="args">The arguments which will be passed to the constructor (must match the constructor).</param>
    /// <returns>A new instance of the given type.</returns>
    internal static T CreateInstance<T>(params object[] args)
    {
        Type type = typeof(T);

        var constructor = type!.GetConstructor(
            bindingAttr: BindingFlags.NonPublic | BindingFlags.Instance,
            binder: null,
            types: GetParameterTypes(args),
            modifiers: null);

        if (constructor != null)
        {
            return (T)constructor.Invoke(args);
        }
        else
        {
            throw new InvalidOperationException("Constructor not found.");
        }
    }

    private static Type[] GetParameterTypes(object[] args)
    {
        Type[] types = new Type[args.Length];

        for (int i = 0; i < args.Length; i++)
        {
            types[i] = args[i].GetType();
        }

        return types;
    }
}